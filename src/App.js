import "./App.css";
import Profile from "./Profile/Profile";
import image from "./Profile/image.jpeg";

function App() {
  const handleName = (name) => alert(name);

  return (
    <div className="App">
      <div
        style={{
          maxWidth: "55%",
          borderRadius: "10px",
          padding: "15px",
        }}
      >
        <Profile
          fullName={"Sinda Brahem"}
          profession={"PhD studies in Physics"}
          bio=" Physics is the natural science that studies matter, its fundamental constituents, its motion and behavior through space and time, and the related entities of energy and force. Physics is one of the most fundamental scientific disciplines, with its main goal being to understand how the universe behaves"
          handleName={handleName}
        >
          <img
            src={image}
            alt=""
            style={{ borderRadius: "50%", width: "150px", height: "150px" }}
          />
        </Profile>
      </div>
    </div>
  );
}

export default App;
