import React from 'react'
import ContentLoader from 'react-content-loader'

const LoaderComponent: React.FC = (props) => {
  return (
    <ContentLoader
    speed={1}
    width={"100%"}
    height={"100%"}
    viewBox="0 0 353 187"
    backgroundColor="#424242"
    foregroundColor="#2b2b2b"
    {...props}
  >
    <rect x="19" y="30" rx="0" ry="0" width="0" height="1" />
    <rect x="550" y="320" rx="0" ry="0" width="64" height="10" />
    <rect x="30" y="223" rx="0" ry="0" width="32" height="32" />
    <rect x="71" y="223" rx="0" ry="0" width="32" height="32" />
    <rect x="0" y="0" rx="17" ry="17" width="353" height="150" />
    <rect x="0" y="154" rx="5" ry="5" width="75" height="23" />
    <rect x="277" y="154" rx="5" ry="5" width="75" height="23" />
  </ContentLoader>
  )
}

export default LoaderComponent