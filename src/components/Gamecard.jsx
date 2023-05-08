import {Link} from 'react-router-dom'

export const Gamecard = ({savedGame}) => {
  return (
    <div className='gamecardcontainer'>

{
          savedGame.map( ({id,name,background_image,ratings,genres,platforms,released,short_screenshots}) =>(
            
            
            <div key={id} className='card'>
              {/* <Link to={`/gamePage/${name}`}state={
                        {id,name,background_image,ratings,genres,platforms,released,short_screenshots}
                    }> */}
              <img src={background_image} alt="image" className='image' />
              {/* </Link> */}
              <p>{`Game :${name}`}</p>
              <p>{`Released Date :${released}`}</p>

              {
                      platforms.map( ({platform}) =>(
                        <div key={platform.id}>
                          <p>{`Platform :${platform.name}`}</p>
                        </div>
                      ))
              }

              {
                genres.map(({id,name}) =>(
                  <p key={id}>{`Genres: ${name}`}</p>
                ))
              }
             
      
              
              {
                ratings.map(rating =>(
                  <div key={`${rating.id}`}>

                        <p>Gamers Rating</p>
                        <p>{`# : ${rating.id}`}</p>
                        <p>{`Valoration: ${rating.title}`}</p>
                        <p>{`Percent:${rating.percent}`}</p>
                        
                  </div>
                ))
              }
            
           

              

            </div>
          ))
        }
{/* -----------------------------------------------------screenshots */}

                {

                savedGame.map(({short_screenshots,},index)=>(
                <div key={index} className='screenshotcontainer'>
                   
                    {
                        short_screenshots.map(({id,image})=>(
                            <div key={id} className='screenshotimage'>
                                    <img src={image} alt="screenshot" className="screenshot" />
                            </div>
            
                          ))
                    }

                </div>

                ))
                }


{/* -----------------------------------------------------screenshots */}


    </div>


  )
}
