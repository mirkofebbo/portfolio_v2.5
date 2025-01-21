export const cleanName = (name) => {
    return name.split("/").pop().split(".")[0];
}

export const isVideo = (url) => {
    // Check url formating
    if (!url) {
        return "";
    }
    const videoExtensions = ['mov', 'mp4', 'avi', 'mkv', 'webm'];
    const extension = url.split(".").pop().toLowerCase();
    return videoExtensions.includes(extension);
}
