import React from "react";
import styles from './Card.module.scss';
import { Button } from "@material-ui/core";



export default function Card(props: { firstName: string, lastName: string, title?: string, shortDescription?: string, rate: number, city?: string }) {
    const [expanded, setExpanded] = React.useState(false);

    return (
        <div className={styles.card}>
            <div className={styles.featured}> 
                <span>Featured</span>
                </div>
            <div className={styles.details}>
                <h2 className={styles.title}>{props.title}</h2>
                <span className={styles.name}>Name: {`${props.firstName} ${props.lastName}`}</span>
                <span className={styles.rating}>Rating: {5} ⭐</span>
                <div className={styles.rating}>Location:  {props.city}</div>
                <div className={styles.rating}>Number of gigs: {20}</div>
                <div className={styles.rating}>Rate/day: R {props.rate}.00</div>
                <div className={styles.shortDescription}>{props.shortDescription?.substring(0,200)}...</div>
                {/* can you ensure that the shorddescription has a maximum text of 150 characters */}

                <div className={styles.buttons}>
                    <Button variant='text' className={styles.watchList} onClick={() => setExpanded(!expanded)}>Watchlist</Button>
                    <Button variant='contained' className={styles.button} onClick={() => setExpanded(!expanded)}>View Profile</Button>
                </div>
            </div>
        </div>
    );}
