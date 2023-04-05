import React, {useEffect, useState} from 'react'
import {Box, Button, Stack, TextField, Typography} from '@mui/material'
import '../App.css'
import { fetchData, exerciseOptions } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'


const SearchExercises = (setExercises, bodyPart, setBodyPart) => {
    const [Search, setSearch] = useState("");
    const [bodyParts, setBodyParts] = useState([])

    useEffect(() => {
        const fetchExercisesData = async() => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
            setBodyParts(['all', ...bodyPartsData]);
        }

        fetchExercisesData();
    }, []);

    const handleSearch = async() => {
        if(Search){
            const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            const searchedExercises = exerciseData.filter(
                (exercise) => exercise.name.toLowerCase().includes(Search)
            ||  exercise.target.toLowerCase().includes(Search)
            ||  exercise.equipment.toLowerCase().includes(Search)
            ||  exercise.bodyPart.toLowerCase().includes(Search)  
            );
            setSearch("");
            setExercises(searchedExercises);
        }
    }
    return (
        <Stack alignItems="center" mt="37px" justifyContent="center" p = "20px">
            <Typography fontWeight={700} sx={{
                fontSize: {lg: '44px', xs: '30px'}
            }} mb = "50px" textAlign="center">Awesome Exercises you <br /> should know
            </Typography>
            <Box position="relative" mb = "72px">
                <input 
                placeholder='Search Exercises' type="text" style={{border: "1px solid grey", borderRadius: "4px", padding: "11px", width: "300px", backgroundColor: "black", color: "white"}}
                value={Search}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                />

                <Button
                onClick={handleSearch}
                 variant = "contained" color = "error" style={{backgroundColor: "#8B0000", paddingLeft: "30px", paddingRight: "30px", textTransform: "none", margin: "20px"}}>Search</Button>
                </Box>

                {/*
                <Box sx={{position: "relative", width: "100%", p: "20px"}}>
                    <HorizontalScrollbar data = {bodyParts} bodyPart = {bodyPart} setBodyPart = {setBodyPart}/>
                </Box>
             */}

        </Stack>
    )
}

export default SearchExercises