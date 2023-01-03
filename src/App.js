import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="calculator-div">
        {/* grid for functionality */}
        <input />
        <table>
          <tbody>
            <tr>
              <th><button>AC</button></th>
              <th><button>tip</button></th>
              <th><button>split</button></th>
              <th><button>/</button></th>
            </tr>
            <tr>
            <th><button>7</button></th>
            <th><button>8</button></th>
            <th><button>9</button></th>
            <th><button>*</button></th>
            </tr>
            <tr>
            <th><button>4</button></th>
            <th><button>5</button></th>
            <th><button>6</button></th>
            <th><button>-</button></th>
            </tr>
            <tr>
            <th><button>1</button></th>
            <th><button>2</button></th>
            <th><button>3</button></th>
            <th><button>+</button></th>
            </tr>
            <tr>
            <th><button>.</button></th>
            <th><button>0</button></th>
            <th><button>+/-</button></th>
            <th><button>=</button></th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
