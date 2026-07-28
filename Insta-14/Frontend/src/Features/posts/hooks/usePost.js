import { getFeed, createPost, likePost, unLikePost } from '../services/post.api'
import { useContext, useEffect } from 'react'
import { PostContext } from '../post.context'

export const usePost = () => {

    const context = useContext(PostContext)

    const { loading, setLoading, post, setPost, feed, setFeed } = context

     const handleGetFeed = async () => {
        setLoading(true)
        try {
            const data = await getFeed()
            setFeed(data.posts)
        } catch (err) {
            console.error("Failed to fetch feed:", err)
            setFeed([]) // Set empty array on failure so !feed is no longer true
        } finally {
            setLoading(false) // Always turn off loading state
        }
    }
    const handleCreatePost = async (imageFile, caption) => {
        setLoading(true)
        const data = await createPost(imageFile, caption)
        setFeed([data.post, ...feed])
        setLoading(false)
    }
    // useEffect(() => {
    //     handleGetFeed()
    // }, [])

    const handleLike = async (post) => {
        setLoading(true)
        const data = await likePost(post)
        setLoading(false)
        await handleGetFeed()
    }
    const handleUnlike = async (post) => {
        const data = await unLikePost(post)
        await handleGetFeed()
    }

    return { loading, feed, post, handleGetFeed, handleCreatePost, handleLike, handleUnlike }
}
