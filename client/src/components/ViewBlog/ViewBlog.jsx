/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import UIAvatar from 'react-ui-avatars';
import {Link} from 'react-router-dom';
import { Divider, Image } from 'semantic-ui-react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './ViewBlog.module.css';
import MarkdownRenderer from '../markdownRenderer';
import {simpleDate} from '../../utils/date/index';
import ShareBlog from './ShareBlog';

const ViewBlog = ({blog}) => {
    const { title, imageUrl, content, description, userId, } = blog;
    const defaultImageURL = "https://miro.medium.com/max/2082/1*7goNE2n2xxOlmomHfC0-Qw.jpeg";
    const defaultDescription = 'Description goes here briefly describing about the blog in maximum 150 characters';
    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <h1 className={styles.title}>{title}</h1>
                <span className={styles.description}> {description || defaultDescription} </span>
                <div className={styles.blogDetails}>
                   <Link to={`/profile/${userId.username}`} target="_blank">
                   {userId.profileImage && userId.profileImage !== 'use name' ? (
                   <Image
                     src={userId.profileImage}
                      size="mini"
                     circular
                     className={styles.left}
                        />):
           (<UIAvatar name={userId.name} size={50} rounded className={styles.left} uppercase/>)}
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
                <LazyLoadImage src={imageUrl || defaultImageURL} alt={title} effect="blur" />
                <Divider horizontal inverted>

                <ShareBlog 
                 {...blog}
                />
                 </Divider> 

            </div>
            <MarkdownRenderer data={content} />
        </div>
    )
}

export default ViewBlog
