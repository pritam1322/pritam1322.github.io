import torch
import torch.nn as nn
import torchvision.transforms as transforms
import torchvision.models as models
from PIL import Image

original_model = models.vgg16(pretrained = True)

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
print(device)

class Feature_extraction(nn.Module):
    def __init__(self):
        super(Feature_extraction, self).__init__()
        self.features = nn.Sequential(*list(original_model.features.children()))[:-3]
    def forward(self, x):
        return self.features(x)

model_ocr = Feature_extraction().to(device).eval()
print(model_ocr)
