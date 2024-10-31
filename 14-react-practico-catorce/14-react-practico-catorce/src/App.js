import './App.css';
import { useState } from 'react';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import { Button } from 'semantic-ui-react';

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null)

  const handleCharacterSelect = (character) => {
    setSelectedCharacter(character);
  }

  const handleBackToList = () => {
    setSelectedCharacter(null);
  }


  return (
    <div className="App">
        {selectedCharacter ? 
          <div>
            <Button onClick={handleBackToList} style={{marginTop: "20px"}}><p>Volver</p></Button>
            <CharacterDetail personaje={selectedCharacter}/>
          </div>
          : 
          <CharacterList onCharacterSelect={handleCharacterSelect}/>
        }

    </div>
  );
}

export default App;