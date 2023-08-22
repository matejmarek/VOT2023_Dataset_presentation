#Creates compressed videos from images and makes new folders to placed there videos and other files form the same folder

import subprocess
import os
import cv2
import shutil
import time 

def create_compress_videos(source_folder, output_folder, frame_rate, resolution, compression_factor, codec):
    list_vot_child = os.listdir(source_folder)

    for child in list_vot_child:
        color_path = os.path.join(source_folder, child, "color")
        list_img_nums = os.listdir(color_path)
        video_folder_path = os.path.join(output_folder, child)
        os.makedirs(video_folder_path, exist_ok=True)
        video_name = child + ".mp4"
        video_full_path = os.path.join(video_folder_path, video_name)
        list_num_paths = [os.path.join(color_path, num) for num in list_img_nums]
        cv2_fourcc = cv2.VideoWriter_fourcc(*"mp4v")
        frame = cv2.imread(list_num_paths[0])
        size = (frame.shape[1], frame.shape[0])
        video_property = cv2.VideoWriter(video_full_path, cv2_fourcc, frame_rate, size)

        for img_path in list_num_paths:
            try:
                frame = cv2.imread(img_path)
                video_property.write(frame)
            except:
                print(f"Skipping {img_path} as it's not an image.")

        video_property.release()
        temp_compressed_path = os.path.join(video_folder_path, "temp_compressed.mp4")
        command = f'ffmpeg -i "{video_full_path}" -c:v {codec} -crf {compression_factor} -vf scale={resolution} "{temp_compressed_path}"'
        subprocess.run(command, shell=True)
        
        if os.path.exists(video_full_path):
            os.remove(video_full_path)
        os.rename(temp_compressed_path, video_full_path)
        video_number = list_vot_child.index(child) + 1
        print('Outputed and compressed video number', str(video_number), 'to', video_full_path.replace("\\", "/"))

        source_item_folder = os.path.join(source_folder, child)
        output_item_folder = os.path.join(output_folder, child)
        for item in os.listdir(source_item_folder):
            source_item = os.path.join(source_item_folder, item)
            output_item = os.path.join(output_item_folder, item)
            
            if os.path.isfile(source_item) and item != "color":  
                shutil.copy2(source_item, output_item)
            elif os.path.isdir(source_item) and item != "color":
                shutil.copytree(source_item, output_item)

    print('Done successfully!')

if __name__ == '__main__':
    source_folder = "/vot_init_dataset"  # VOT dataset path with structure: MAIN -> SEQUENCES_FOLDERS(name of video) -> COLOR -> IMGS_BY_NUMBER and OTHER_FILES
    output_folder = "/VOT_dataset_presentation-main/version_07/media"  # where do you want the result videos with compression
                                            # output structure: OUTPUT_FOLDER -> SEQUENCES_FOLDERS(name of video) -> VIDEO and OTHER_FILES
    frame_rate = 30  # fps, same for all videos
    resolution = '1280x720'
    compression_factor = 30
    codec = 'h264'

    start_time = time.time()
    create_compress_videos(source_folder, output_folder, frame_rate, resolution, compression_factor, codec) 
    end_time = time.time()
    elapsed_time = end_time - start_time
    print(f"Elapsed time: {elapsed_time:.2f} seconds")
