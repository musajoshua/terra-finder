import vid from "../resources/video/terrafinder.mp4";
// import pic from "../resources/terra_poster.jpg";

function Video() {
  return (
    <>
      <div className="fixed top-1/2 left-1/2 min-w-full min-h-screen w-auto h-auto -translate-x-1/2 -translate-y-1/2 -z-40 bg-[rgba(8,32,128,.85)]"></div>
      <div>
        <video
          playsInline
          autoPlay
          loop
          muted
          className="-z-50 fixed top-1/2 left-1/2 min-h-screen min-w-full bg-cover bg-half w-auto h-auto -translate-x-1/2 -translate-y-1/2 max-w-none"
        >
          <source src={vid} type="video/mp4" />
          Your browser does not support html5 video
        </video>
      </div>
    </>
  );
}

export default Video;
