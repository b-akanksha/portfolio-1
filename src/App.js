import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from "react-tsparticles";
import Navbar from './components/Navbar';
import Header from './components/Header';

function App() {
  return (
    <>
    <Particles 
      params={{
        particles: {
          number: {
            value: 250,
            density: {
              enable: true,
              area: 900
            }
          },
          color: {
            value: "#f9ab00",
            animation: {
              enable: true,
              speed: 30
            }
          },
          shape: {
            type: ["triangle", "circle", "square"]
          },
          size: {
            value: {
              min: 3,
              max: 5
            }
          },
          move: {
            direction: "bottom",
            enable: true,
            outModes: {
              default: "out"
            },
            size: true,
            speed: {
              min: 1,
              max: 3
            }
          },
          opacity: {
            value: 1,
            animation: {
              enable: false,
              startValue: "max",
              destroy: "min",
              speed: 0.3,
              sync: true
            }
          },
          rotate: {
            value: {
              min: 0,
              max: 360
            },
            direction: "random",
            move: true,
            animation: {
              enable: true,
              speed: 60
            }
          },
          tilt: {
            direction: "random",
            enable: true,
            move: true,
            value: {
              min: 0,
              max: 360
            },
            animation: {
              enable: true,
              speed: 60
            }
          },
          
        }
      }}
    />
    <Navbar />
    <Header />
    </>
  );
}

export default App;
