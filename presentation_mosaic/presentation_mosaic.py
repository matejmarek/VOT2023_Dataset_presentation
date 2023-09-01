from PIL import Image
import os
import shutil
import cv2

def create_folders(output_folder):
    mosaic_folder_path = os.path.join(output_folder, "mosaic")
    if os.path.exists(mosaic_folder_path):
        shutil.rmtree(mosaic_folder_path)
    os.makedirs(mosaic_folder_path)
    mosaic_frames_folder = os.path.join(mosaic_folder_path, "frames")
    os.makedirs(mosaic_frames_folder)

def make_mosaic_dataset(source_folder, desired_width, desired_height):
    mosaic_frames_folder = os.path.join(output_folder, "mosaic/frames")
    longest_list = 0
    list_vot_child = os.listdir(source_folder)
    for child in list_vot_child:
        color_path = os.path.join(source_folder, child, "color")
        short_list = os.listdir(color_path)
        if len(short_list) > longest_list:
            longest_list = len(short_list)
    for i in range(longest_list):
        sized_video_list = []
        for name in list_vot_child:
            if name != "ants1" and name != "ball3" and name != "matrix":
                sized_video_list.append(name)
        row = 0
        col = 0
        final_image = Image.new("RGB", (desired_width, desired_height))
        for child in sized_video_list:
            color_path = os.path.join(source_folder, child, "color")
            items_in_directory =os.listdir(color_path)
            wrapped_index = i % len(items_in_directory)
            image_path = os.path.join(color_path, items_in_directory[wrapped_index])
            image = Image.open(image_path)
            cell_width = desired_width // num_col
            cell_height = desired_height // num_row
            image = image.resize((cell_width, cell_height), Image.LANCZOS)
            image_x = col * (cell_width)
            image_y = row * (cell_height)
            final_image.paste(image, (image_x, image_y))
            row += 1
            if row == num_row:
                row = 0
                col += 1
        formatted_number = f"{i:07d}"
        final_image.save(os.path.join(mosaic_frames_folder,f"{formatted_number}.jpg"))
        percentage = i/longest_list*90
        print(f"\033[92m    {percentage:.2f}% done.\033[0m")

def make_mosaic_video(output_folder, frame_rate):
        mosaic_folder_path = os.path.join(output_folder, "mosaic")
        mosaic_frames_folder = os.path.join(output_folder, "mosaic/frames")
        list_img_nums = os.listdir(mosaic_frames_folder)
        video_name ="mosaic.mp4"
        video_full_path = os.path.join(mosaic_folder_path, video_name)
        list_num_paths = [os.path.join(mosaic_frames_folder, num) for num in list_img_nums]
        cv2_fourcc = cv2.VideoWriter_fourcc(*"mp4v")
        frame = cv2.imread(list_num_paths[0])
        size = (frame.shape[1], frame.shape[0])
        video_property = cv2.VideoWriter(video_full_path, cv2_fourcc, frame_rate, size)
        for img_path in list_num_paths:
            frame = cv2.imread(img_path)
            video_property.write(frame)
        
if __name__ == '__main__':
    source_folder = "C:/Users/machm/vot23-init-dataset"
    output_folder = "C:/Users/machm"
    desired_width = 1920
    desired_height = 1080
    frame_rate = 30
    num_row = 12
    num_col = 12

    create_folders(output_folder)
    make_mosaic_dataset(source_folder, desired_width, desired_height)
    make_mosaic_video(output_folder, frame_rate)
    
    print(f"\033[92m    Done successfully!\033[0m")