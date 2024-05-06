import Button from '@/components/Buttons/Button'
import FormikField from '@/components/Input/FormikField'
import Divider from '@/components/layout/Divider'
import { generateValidationSchema } from '@/lib/generateValidationSchema'
import { IDynamicForm } from '@/types/form'
import { Form, FormikProvider, useFormik } from 'formik'

const Home = () => {
	// Dynamic fields
	const fields: IDynamicForm[] = [
		{
			name        : 'phone',
			type        : 'tel',
			placeholder : '08226431xxxx',
			fieldType   : 'text',
			label       : 'Nomor Wa',
			validation  : {
				charLength : {
					min : 3,
					max : 30,
				},
				required : true,
			},
		},
		{
			name        : 'chat',
			type        : 'text',
			placeholder : 'Masukkan isi chat',
			fieldType   : 'text',
			label       : 'Isi Chat',
			validation  : {
				charLength : {
					min : 3,
					max : 300,
				},
				required : false,
			},
		},
	]

	// @ NOTE Form
	const schema = generateValidationSchema( fields )

  interface IInitialValues {
    chat: string
    phone: string
  }

  const initialValues: IInitialValues = { chat : '', phone : '' }

  const formik = useFormik( {
  	initialValues    : initialValues,
  	validationSchema : schema,
  	onSubmit         : ( value ) => {
  		const phone = convertPhone( value.phone.toString() )
  		const text = encodeURIComponent( value.chat )
  		window.open( `https://wa.me/${phone}?text=${text}` )
  	},
  } )

  const convertPhone = ( phone: string ) => {
  	let phoneNumber: string
  	const regCountry = new RegExp( /^(\+62)[0-9]*/gm )
  	const regPhone = new RegExp( /^(0)[0-9]*/gm )
  	if ( regCountry.test( phone ) ) {
  		phoneNumber = phone.replace( /(\+62)/, '62' )

  		return phoneNumber
  	} else if ( regPhone.test( phone ) ) {
  		phoneNumber = phone.replace( /(0)/, '62' )

  		return phoneNumber
  	}
  }

  return (
  	<div className="flex flex-col gap-4">
  		<FormikProvider value={formik}>
  			<Form onSubmit={formik.handleSubmit} className="flex flex-col gap-2">
  				{fields.map( ( item: IDynamicForm ) => (
  					<FormikField
  						label={item.label}
  						name={item.name}
  						placeholder={item.placeholder}
  						key={item.name}
  						type={item.type}
  						fieldType={item.fieldType}
  						required={item.validation?.required}
  						select={item?.select}
  					/>
  				) )}
  				<Button variant="secondary" type="submit">
            Submit
  				</Button>
  			</Form>
  		</FormikProvider>
  		<Divider />
  		<p>
        Cukup masukkan nomor telepon yang ingin Anda hubungi melalui WhatsApp
        dalam format internasional, seperti +1 650 555 7475. Tidak ada login
        atau pendaftaran yang diperlukan di situs ini. Yang Anda butuhkan
        hanyalah akun WhatsApp yang aktif. Platform ini memprioritaskan privasi
        dan tidak menggunakan cookies.
  		</p>
  		<Divider />
  		<p>
        Layanan WhatsApp langsung ini memungkinkan Anda mengirim pesan tanpa
        perlu menyimpan nomor telepon. Ini dirancang untuk situasi di mana Anda
        ingin mengirim pesan WhatsApp tanpa menambahkan seseorang ke daftar
        kontak Anda, menghindari penumpukan kontak dengan setiap penerima. Jika
        Anda lebih memilih untuk tidak memperluas daftar kontak Anda dengan
        setiap orang yang Anda kirimi pesan di WhatsApp, layanan ini cocok untuk
        Anda:
  			<br />
  			<strong>WA Langsung by ianfebi01</strong>
  		</p>
  		<Divider />
  	</div>
  )
}

export default Home
