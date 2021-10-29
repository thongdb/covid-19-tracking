import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';

import React from 'react'

const useStyles = makeStyles({
    wrapper: (props) => {
        if (props.type === 'confirmed')
            return { borderLeft: '5px solid #c9302c' }
        else if (props.type === 'recovered')
            return { borderLeft: '5px solid #28a745' }
        else
            return { borderLeft: '5px solid gray' }
    },
    title: {
        fontSize: 18, 
        marginBottom: 5
    },
    count: {
        fontWeight: 'bold',
        fontSize: 18
    }
})

const HighlightCard = ({ title, count, type }) => {
    const styles = useStyles({ type });

    return (
        <Card className={styles.wrapper}>
            <CardContent>
                <Typography 
                    component="p" 
                    variant="body2"
                    className={styles.title}
                >
                    {title}
                </Typography>
                <Typography 
                    component="span" 
                    variant="body2"
                    className={styles.count}
                >
                    {count}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default HighlightCard
