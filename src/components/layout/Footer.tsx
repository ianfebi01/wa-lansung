
const Footer = () => {
	return (
		<footer className="bg-custom-gray p-4 w-full flex flex-col gap-2 items-center justify-center text-white">
			<p>
        © 2018/2024 ianfebi01 <br />
        Privacy: We only use regular web-server logging for debugging and
        statistical purposes. No further information is recorded. No cookies are
        used. Phone numbers are not sent to our server or stored on our server.
        Phone numbers are sent directly to the WhatsApp servers. This service is
        not associated with Meta, Facebook or WhatsApp in any way.
				<br />
				<a className='underline' href="https://api.whatsapp.com/send?phone=6282264319643">contact</a>
			</p>
		</footer>
	)
}

export default Footer
