/* eslint-disable react/prop-types */
import React from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

import styles from './MovableStackedCard.module.scss';
import BlogCard from '../BlogCard/index'
import useSearchBlogs from '../../hooks/useSearchBlogs';

const MovableStackedCard = ({
    _id,
}) => {
    const categoryList = [_id];
    const [blogs, fetched] = useSearchBlogs(1, '', categoryList);
    const blogsCards = blogs.map((blog) => {
        const user = blog.userId || {};
        return (
            <div className={styles.card}>
                    <div className={styles.cardContainer}>
                    <BlogCard {...user} {...blog} href={`/blog/${blog._id}`}/>
                    </div>
                </div>
          )
    }
    )
    if(!fetched) {
        return (<Segment>
            <Dimmer active>
              <Loader size='mini'>Loading</Loader>
            </Dimmer>
      
            <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
          </Segment>)
    }
    return (
        <div className={styles.background}>
            <div className={styles.cards}>
                {
                    blogs.length > 0 ? blogsCards : (
                    <h2>
                        No Blogs Found
                    </h2>)
                }
            </div>
        </div>
    )
}

export default MovableStackedCard
