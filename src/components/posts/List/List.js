import React from 'react'

import Actions from './List.Actions'

export default ({ currentUserId, destroyPost, user}) => {
  const posts = user.posts.map(post => (
    <div key={post._id} className='card'>
      <div className='card-body'>
      <p className='card-text'>{ post.content }</p>
        <blockquote className='blockquote mb-0'>
        {
          post.emotion ?

            <footer className='blockquote-footer'>Was feeling: { post.emotion }</footer>

          : null
        }
        </blockquote>
      </div>
      <Actions
        currentUserId={currentUserId}
        destroyPost={destroyPost}
        post={post}
        user={user} />
    </div>
  ))

  return (
    <>
      <h1 className='mb-4'>{ user.name ? user.name : user.username }'s Posts</h1>
      { !posts.length ? `You should create a new post` : posts}
    </>
  )
}
