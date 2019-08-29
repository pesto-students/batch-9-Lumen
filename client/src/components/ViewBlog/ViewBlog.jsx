import React from 'react'
import UIAvatar from 'react-ui-avatars';
import {Link} from 'react-router-dom';

import styles from './ViewBlog.module.css';
import MarkdownRenderer from '../markdownRenderer';
import {simpleDate} from '../../utils/date/index';


const ViewBlog = ({blog}) => {
    console.log(blog);
    const {title, imageUrl, content, description, userId} = blog;
    const defaultImageURL = "https://miro.medium.com/focal/2121/1414/52/54/1*rQEb5YORGZUzPxXTQ5ecoQ.jpeg";
    const defaultDescription = 'Description goes here briefly describing about the blog in maximum 150 characters'
    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <h1 className={styles.title}>{title}</h1>
                <span className={styles.description}> {description || defaultDescription} </span>
                <div className={styles.blogDetails}>
                   <Link to={`/profile/${userId.username}`} target="_blank">
                        <UIAvatar 
                        name={userId.name} 
                        size={50} 
                        rounded 
                        className={styles.left}  />
                    </Link>

                    <div className={styles.right}>
                        <Link to={`/profile/${userId.username}`} target="_blank" >
                            <span 
                            className={styles.name} 
                            role="navigation"
                            > 
                                {userId.name}
                            </span>
                        </Link>
                        <span className={styles.date}> {simpleDate(blog.createdAt)} </span>
                    </div>
                </div>
                <img src={imageUrl || defaultImageURL } alt={title}/>
            </div>
            <MarkdownRenderer data={content} />
        </div>
    )
}

export default ViewBlog
