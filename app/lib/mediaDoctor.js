export default function(file, metadata) {
    return {
        src: file,
        album: metadata.album,
        artist: metadata.artist[0],
        title: metadata.title,
        duration: metadata.duration,
        picture: getPicture(metadata)
    };
}

function getPicture(metadata) {
    if (metadata.picture[0]) {
        return metadata.picture[0].data;
    }
}
