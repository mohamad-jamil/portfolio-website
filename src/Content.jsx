export default function Content() {
  return (
    <div id="about" className="flex flex-col items-center mt-20 py-36">
      <div className="text-white font-mono text-4xl text-center mx-8">
        Hey world, I'm Jamil.
      </div>
      <div className="w-40 h-1 bg-white mt-4"></div>
      <img
        src="/profile_picture.png"
        alt="profile picture"
        className="w-64 h-64 rounded-full shadow-lg mt-8"
      />
      <div className="text-white font-mono text-center mt-12 mx-6 lg:max-w-4xl">
        Hey! I'm Jamil, a CS master's graduate from UCL with a passion for
        software development and data science. With a strong foundation in
        Computer Science, I'm well equipped with a solid technical skillset and
        a curiosity to explore and innovate!
      </div>
      <div className="text-white font-mono text-center mt-4 mx-6 lg:max-w-4xl">
        Beyond my career and academics, I enjoy exploring new places, and
        staying active through running and football. I also have a creative
        side, which I channel through sewing and cross stitching!
      </div>
      <div className="flex items-center justify-center gap-8 mt-8">
        <a href="https://github.com/mohamad-jamil/" target="_blank">
          <img src="/github.svg" alt="github logo" className="w-16 h-16" />
        </a>
        <a href="https://linkedin.com/in/mohamad-jamil" target="_blank">
          <img src="/linkedin.svg" alt="linkedin logo" className="w-16 h-16" />
        </a>
        <a href="https://www.credly.com/users/mohamad-jamil/" target="_blank">
          <img src="/credly.svg" alt="credly logo" className="w-16 h-16" />
        </a>
        <a href="https://leetcode.com/u/ItsJam/" target="_blank">
          <img src="/leetcode.svg" alt="leetcode logo" className="w-16 h-16" />
        </a>
      </div>
    </div>
  );
}
