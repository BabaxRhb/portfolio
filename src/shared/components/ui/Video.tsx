interface VideoProps {
    src: string;
    width?: number;
    height?: number;
}

const Video = ({ src, width, height }: VideoProps) => {
    return <video width={width} height={height} controls src={src}/>
}

export default Video;