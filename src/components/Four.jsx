import React from 'react'
import harshImage from '../font/harshmann2bw.jpg'

function Four() {
	return (
		<div className='founderDiv-1'>
			<div className='founderDiv-2'>
				<img
					height='500px'
					src={harshImage}
					alt=''
					className='founderImg'
				/>
			</div>
			<div>
				<h1 className='aboutFounder'>About</h1>
				<h2 className='founder'>Founder</h2>
				<p className='paraFounder'>
					A connoisseur of all things luxurious and
					passionate about the business of luxury, Harsh
					Mann, has cultivated deep insights on evolving
					industry trends across the world. As an MBA in
					luxury brand management and an alumnus of IFA,
					Paris, his in-depth knowledge and understanding of
					Indian culture as well as 25 different world
					cultures, makes him a keen observer of new
					challenges, current movements and foresee the
					future trends of the Indian luxury market.
				</p>
			</div>
		</div>
	)
}

export default Four
