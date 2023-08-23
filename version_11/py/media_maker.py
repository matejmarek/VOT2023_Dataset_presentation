#Writes new javascript list of video names
#Makes groundtruth mask for a first frame
#Creates new folders in needed media structure to placed there videos and other files form source 
#Creates compressed videos from images

import subprocess
import os
import cv2
import shutil
import json
import numpy as np

def write_new_list(source_folder, output_list_folder):

    list_vot_child = os.listdir(source_folder)
    javascript_code = f"export const videoNameList = {json.dumps(list_vot_child)}"
    new_list_path = os.path.join(output_list_folder, "newList.js")

    with open(new_list_path, "w") as js_file:
        js_file.write(javascript_code)

def make_mask(source_folder):
    list_vot_child = os.listdir(source_folder)
    for child in list_vot_child:
        folder_path = os.path.join(source_folder, child)
        color_path = os.path.join(folder_path, "color")
        rect_path = os.path.join(folder_path, "init_rect.txt")
        items_in_directory = os.listdir(color_path)
        image_path = os.path.join(color_path, items_in_directory[0])
        image = cv2.imread(image_path)
        mask = np.zeros_like(image, dtype=np.uint8)

        with open(rect_path, "r") as gt_file:
            for line in gt_file:
                x, y, width, height = map(float, line.strip().split(','))
                x, y, width, height = int(x), int(y), int(width), int(height)
                cv2.rectangle(mask, (x, y), (x + width, y + height), (0, 0, 255, 128), -1)

        combined_image = cv2.addWeighted(image, 1, mask, 0.5, 0, dtype=cv2.CV_8U)
        combined_output_path_color =os.path.join(color_path, "00000000mask.jpg")
        combined_output_path_last =os.path.join(color_path, "zzmask.jpg")
        combined_output_path_folder =os.path.join(folder_path, f"{child}_groundtruth_mask.jpg")
        cv2.imwrite(combined_output_path_color, combined_image)
        cv2.imwrite(combined_output_path_last, combined_image)
        cv2.imwrite(combined_output_path_folder, combined_image)

def create_folders(source_folder, output_folder):
    media_folder_path = os.path.join(output_folder, "media")
    if os.path.exists(media_folder_path):
        shutil.rmtree(media_folder_path)
    os.makedirs(media_folder_path)
    list_vot_child = os.listdir(source_folder)
    for child in list_vot_child:
        video_folder_path = os.path.join(media_folder_path, child)
        os.makedirs(video_folder_path, exist_ok=True)
        source_item_folder = os.path.join(source_folder, child)
        output_item_folder = os.path.join(media_folder_path, child)
        for item in os.listdir(source_item_folder):
            source_item = os.path.join(source_item_folder, item)
            output_item = os.path.join(output_item_folder, item)
            if os.path.isfile(source_item) and item != "color":  
                shutil.copy2(source_item, output_item)
            elif os.path.isdir(source_item) and item != "color":
                shutil.copytree(source_item, output_item)

def create_compress_videos(source_folder, output_folder, frame_rate, resolution, compression_factor, codec):

    list_vot_child = os.listdir(source_folder)
    for child in list_vot_child:
        color_path = os.path.join(source_folder, child, "color")
        video_folder_path = os.path.join(output_folder, "media" , child)
        list_img_nums = os.listdir(color_path)
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

if __name__ == '__main__':
    source_folder = "C:/Users/machm/vot_init_dataset"  # VOT dataset path with structure: MAIN -> SEQUENCES_FOLDERS(name of video) -> COLOR -> IMGS_BY_NUMBER and OTHER_FILES
    output_folder = "C:/Users/machm/VOT2023_Dataset_presentation-main/version_12"  # where do you want the result videos with compression
                                            # output structure: OUTPUT_FOLDER -> SEQUENCES_FOLDERS(name of video) -> VIDEO and OTHER_FILES
    frame_rate = 30  # fps, same for all videos
    resolution = '1280x720'
    compression_factor = 30
    codec = 'h264'

    output_list_folder = "C:/Users/machm/VOT2023_Dataset_presentation-main/version_12/js" #replaced it with a path to your ja section

    write_new_list(source_folder, output_list_folder)
    make_mask(source_folder)
    create_folders(source_folder, output_folder)
    create_compress_videos(source_folder, output_folder, frame_rate, resolution, compression_factor, codec) 

    print('Done successfully!')
