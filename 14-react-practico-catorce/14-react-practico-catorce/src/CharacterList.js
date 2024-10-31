import React from 'react'
import { useEffect, useState} from 'react'
import { GridColumn, Grid, Image , Card, CardContent, CardHeader} from 'semantic-ui-react'

function CharacterList({ onCharacterSelect }) {
  const [characters, setCharacters] = useState([])

  useEffect( () => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
        setCharacters(data.results)
    })
  }, [])

  return (
    <div>
      <Grid columns='four' divided>
        {characters.map((character) => (
          
            <GridColumn key={character.id} style={{display:"flex", justifyContent:"center"}}>
              <Card onClick={ ()=>{onCharacterSelect(character)} }>
                <Image src={character.image} alt={character.name}/>
                <CardContent>
                  <CardHeader>{character.name}</CardHeader>
                </CardContent>
              </Card>
            </GridColumn>
          
        ))}
      </Grid>
    </div>
  )
}

export default CharacterList