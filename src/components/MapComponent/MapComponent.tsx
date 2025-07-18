import React from 'react'

export const MapComponent = () => {
	return (
		<div className="w-screen h-screen mx-auto">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m20!1m11!1m3!1d223.25318061351004!2d90.0340204270725!3d23.992449362073874!2m2!1f5.921294635489772!2f45!3m2!1i1024!2i768!4f35!4m6!3e0!4m0!4m3!3m2!1d23.994725329435322!2d90.03445913606441!5e1!3m2!1sen!2sbd!4v1746579376023!5m2!1sen!2sbd"
				width="100%"
				height="100%"
				style={{ border: 0, width: '100vw', height: '100vh' }}
				allowFullScreen
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
	)
}
