import React, { useEffect, useState } from "react";
import PeopleCard from "./PeopleCard.js";
import Grid from '@mui/material/Grid';
import {db} from "./Firebase";
import { collection, getDocs } from "firebase/firestore";

/*const PeopleList = props => {
    const cards = props.cards.map(card => {
      return <PeopleCard key={card.id} card={card} />;
    });
    return <div className="cards-list">{cards}</div>;
  };
*/

const PeopleList = () => {

    const [dataPeople, setDataPeople] = useState([]);

    const fetchPost = async () => {
        const querySnapshot = await getDocs(collection(db, "people"))
        let data_list = []
        querySnapshot.forEach((doc) => {
            data_list.push(doc.data());
        });
        setDataPeople(data_list);
        // console.log(data_list);
    }

    useEffect(()=>{
        fetchPost();
    },[])

    return (
        <Grid container spacing={1}>
            {/* <Grid container item spacing={5}>
                <PeopleCard />
                <PeopleCard />
                <PeopleCard />
            </Grid>
            <Grid container item spacing={3}>
                <PeopleCard />
                <PeopleCard />
                <PeopleCard />
            </Grid>
            <Grid container item spacing={3}>
                <PeopleCard />
                <PeopleCard />
                <PeopleCard />
            </Grid> */}
            <Grid container item spacing={3}>
                {dataPeople.map((item)=>{
                    return(
                        <PeopleCard info={item}/>
                    )
                })}
            </Grid>
        </Grid>

    );
};

export default PeopleList;


