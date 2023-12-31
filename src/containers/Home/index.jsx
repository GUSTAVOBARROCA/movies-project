import { useState, useEffect } from "react"
import Button from "../../components/Button"
import Slider from "../../components/Slider"
import api from "../../services/api"
import { getImages } from "../../utils/getImages"
import { Background, Container, Info,ContainerButtons, Poster } from "./styles"



function Home() {

    const [ movie, setMovie ] = useState()
    const [ topMovies, setTopMovies ] = useState()
    const [ topSeries, setTopSeries ] = useState()
    const [ popularSeries, setPopularSeries ] = useState()
    const [ TopPeople, setTopPeople ] = useState()


    useEffect( () => {
        async function getMovies(){
            const { data:{ results } } = await api.get('/movie/popular')
    
            setMovie(results[0])
        
        }
        

        async function getTopMovies(){
            const { data:{ results } } = await api.get('/movie/top_rated')

            console.log(results)
            setTopMovies(results)

        }

        async function getTopSeries(){
            const { data:{ results } } = await api.get('/tv/top_rated')

            console.log(results)
            setTopSeries(results)

        }

        async function getPopularSeries(){
            const { data:{ results } } = await api.get('/tv/popular')

            console.log(results)
            setPopularSeries(results)

        }

        async function getTopPeople(){
            const { data:{ results } } = await api.get('/person/popular')

            console.log(results)
            setTopPeople(results)

        }

            getMovies()
            getTopMovies()
            getTopSeries()
            getPopularSeries()
            getTopPeople()
    }, [] )  


    return(

        <>
        { movie && ( 
            <Background image={getImages(movie.backdrop_path)}>
                <Container>
                    <Info> 
                        <h1>{movie.title}</h1>
                        <p>{movie.overview}</p>
                        <ContainerButtons>
                        <Button red >Assista Agora</Button>
                        <Button>Assista o Trailer</Button>
                        </ContainerButtons>
                    </Info>   
                    <Poster>
                        <img alt="capa-do-filme" src={getImages(movie.poster_path)} />
                    </Poster>
                </Container>
            </Background> 
        ) }    

        { topMovies && <Slider info={ topMovies } title={'Top Filmes'} /> }

        { topSeries && <Slider info={ topSeries } title={'Top Séries'} /> }  

        { popularSeries && <Slider info={ popularSeries } title={'Séries Populares'} /> } 

        { TopPeople && <Slider info={ TopPeople } title={'Top Artistas'} /> } 
            
        </>
    )


}

export default Home