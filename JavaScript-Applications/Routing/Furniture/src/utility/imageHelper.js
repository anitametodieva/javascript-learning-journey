const fallbackImage = "./images/table.png";

export function resolveImagePath(img) {
    if(!img) {
        return fallbackImage;
    }

    if(img.startsWith("http://") || img.startsWith("https://")) {
        return img;
    }

    if(img.startsWith("./") || img.startsWith("../") || img.startsWith("/")) {
        return img;
    }

    if(img.startsWith("images/")) {
        return `./${img}`;
    }

    return fallbackImage;
}
