import torch
import torch.nn as nn
import torchvision.transforms as transforms
import torchvision.models as models
from torch.utils.data import Dataset
from PIL import Image
import os
import numpy as np

class image_folder(Dataset):
    def __init__(self, root_dir, transform = None):
        super(image_folder, self).__init__()
        self.data = []
        self.root_dir = root_dir
        self.transform = transform
        self.class_name = os.listdir(root_dir)
        for index,name in enumerate(self.class_name):
            files = os.listdir(os.path.join(root_dir, name))
            self.data += list(zip(files, [index]*len(files)))
    def __len__(self):
        return len(self.data)

    def __getitem__(self, index):
        img_file = self.data[index]
        root_and_dir = os.path.join(self.root_dir)
        image = np.array(Image.open(os.path.join(root_and_dir, img_file)))

        if self.transform is not None:
            augmentations = self.transform(image=image)
            image = augmentations["image"]


        return image

image_folder(root_dir = "C:\Users\prita\PycharmProjects\Receipt Recognition\images", transform=config.train_transforms)