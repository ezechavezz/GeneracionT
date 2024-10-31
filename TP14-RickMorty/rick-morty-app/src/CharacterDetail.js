import React from 'react'
import { Image , Card, CardContent, CardHeader, CardDescription} from 'semantic-ui-react'

function CharacterDetail({ personaje }) {
  return (
    <div style={{display:"flex", justifyContent:"center", marginTop:"150px"}}>
      <Card>
        <Image src={personaje.image} alt={personaje.name}/>
        <CardContent>
          <CardHeader><p>{personaje.name}</p></CardHeader>
          <CardDescription>
          <p>status: {personaje.status}</p>
          <p>species: {personaje.species}</p>
          <p>gender: {personaje.gender}</p>
          <p>origin: {personaje.origin.name}</p>
          <p>localization: {personaje.location.name}</p>
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  )
}

export default CharacterDetail