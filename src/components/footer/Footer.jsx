import React from 'react';

import ContentWrapper from '../contentWrapper/ContentWrapper';

import './style.scss';

const Footer = () => {
	return (
		<footer className='footer'>
			<ContentWrapper>
				<div className='infoText'>this is AniHub Anime Web Application Using react Redux And jikan api </div>
				<div className='infoText'>
					Contect Me Here - <code>Yahyamomin06@gmail.com</code>
				</div>
				<div className='infoText'>@ copy right all rights reserved - Yahya</div>
				<ul className='links'>
					<li>
						<a href='https://github.com/Tokito6088' target='_blank'>
							<i className='fa-brands fa-github'></i>
						</a>
					</li>
					<li>
						<a href='https://www.linkedin.com/in/yahya-momin-53794225a' target='_blank'>
							<i className='fa-brands fa-linkedin'></i>
						</a>
					</li>
				</ul>
				<div className='getCode'>
					<a href='https://github.com/Tokito6088/ClineHub' target='_blank'>
						Get Code
					</a>
				</div>
			</ContentWrapper>
		</footer>
	);
};

export default Footer;
