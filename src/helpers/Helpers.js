export const cleanName = (name) => {
    return name.split("/").pop().split(".")[0];
}
