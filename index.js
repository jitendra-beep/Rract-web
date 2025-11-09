function App() {
  return (
    <div>
      <header>
        <h1>Jitendra</h1>
        <p>Student | Diploma in Computer Science & Engineering</p>
        <p>Bareilly, Uttar Pradesh</p>
      </header>

      <section>
        <h2>About Me</h2>
        <p>
          I am a final year Computer Science student from Government Polytechnic
          Rampur. I have a basic understanding of HTML, CSS, JavaScript, Python,
          Bootstrap, and MS Office. I love creating simple web projects and
          learning new technologies.
        </p>
      </section>

      <section>
        <h2>Skills</h2>
        <div className="skills">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>Bootstrap</li>
            <li>MS Office</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Simple Calculator</strong> — A calculator using HTML, CSS,
            and JS.
          </li>
          <li>
            <strong>To-Do List</strong> — A simple app to manage daily tasks.
          </li>
          <li>
            <strong>Amazon Clone</strong> — A front-end UI replica of the Amazon
            homepage.
          </li>
        </ul>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          📧 Email:{" "}
          <a href="mailto:jitendramaurya654321@gmail.com">
            jitendramaurya654321@gmail.com
          </a>
        </p>
        <p>
          🌐 GitHub:{" "}
          <a href="https://github.com/jitendra-beep" target="_blank">
            github.com/jitendra-beep
          </a>
        </p>
      </section>

      <footer>
        <p>© 2025 Jitendra | React Portfolio</p>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
