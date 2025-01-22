export default function Content() {
  return (
    <div className="flex flex-col items-center my-12">
      <div className="text-white font-mono text-4xl">Hey world, I'm Jamil.</div>
      <div className="w-40 h-1 bg-white mt-4"></div>
      <img
        src="/profile_picture.png"
        alt="profile picture"
        className="w-64 h-64 rounded-full shadow-lg mt-8"
      />
      <div className="text-white font-mono text-center mt-12">
        Hey! I'm Jamil, a recent graduate from UCL with a passion for software
        development and data science. With a<br />
        strong foundation in Computer Science, I'm well equipped with a solid
        technical skillset and a curiosity to explore and innovate!
        <br />
      </div>
      <div className="text-white font-mono text-center mt-4">
        Beyond my career and academics, I enjoy...
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
      </div>
    </div>
  );
}
