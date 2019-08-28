import React from 'react'
import UIAvatar from 'react-ui-avatars';

import styles from './ViewBlog.module.css';
import MarkdownRenderer from '../markdownRenderer';

const ViewBlog = (props) => {
    const {title, imageUrl, content, description} = props;
    const defaultImageURL = "https://miro.medium.com/focal/2121/1414/52/54/1*rQEb5YORGZUzPxXTQ5ecoQ.jpeg";
    const defaultDescription = 'Description goes here briefly describing about the blog in maximum 150 characters'
    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <h1 className={styles.title}>{title}</h1>
                <span className={styles.description}> {description || defaultDescription} </span>
                <div className={styles.blogDetails}>
                    <UIAvatar name='John Snow' size={50} rounded className={styles.left} />
                    <div className={styles.right}>
                        <span className={styles.name}> John Snow</span>
                        <span className={styles.date}> August 29 </span>
                    </div>
                </div>
                <img src={imageUrl || defaultImageURL } alt={title}/>
            </div>
            <MarkdownRenderer data={content} />
        </div>
    )
}

export default ViewBlog
