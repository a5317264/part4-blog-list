// eslint-disable-next-line no-unused-vars
const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  const reducer = (sum, item) => {
    return sum + item.likes
  }
  return blogs.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
  const maxLikes = Math.max.apply(Math, blogs.map((blog) => blog.likes ))
  const mostLikedBlog = blogs.find((blog) => blog.likes === maxLikes)
  return mostLikedBlog
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}