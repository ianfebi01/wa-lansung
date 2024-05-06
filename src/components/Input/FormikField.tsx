import { ChangeEvent, forwardRef, useEffect, useMemo, useRef } from 'react'
import { useField } from 'formik'
import { Switch } from '@headlessui/react'
import { cn } from '@/lib/utils'

interface Props {
  name: string
  label: string
  placeholder: string
  type?: string
  fieldType?:
    | 'text'
    | 'image'
    | 'switch'
    | 'year'
    | 'date'
    | 'select'
    | 'month-year'
  defaultImageUrl?: string
  setImageBase64?: ( base64: string ) => void
  required?: boolean
  disabled?: boolean
  select?: {
    isMulti?: boolean
  }
  loading?: boolean
}

export interface FormikFieldHandler {
  clearImage: () => void
}
const FormikField = forwardRef<FormikFieldHandler, Props>( function FormikField(
	props
) {
	const {
		name,
		label,
		placeholder,
		fieldType = 'text',
		required,
		disabled = false,
		loading,
		type = 'text',
	} = props

	const [field, meta, helpers] = useField( name )

	const requiredIcon = useMemo( () => {
		if ( required && disabled ) return '*'
		else if ( required && !disabled )
			return <span className="text-red-500">*</span>
	}, [] )

	useEffect( () => {
		if ( type === 'tel' ) {
			textRef.current?.addEventListener( 'keypress', ( evt ) => {
				evt = evt || window.event
				const charCode = evt.which ? evt.which : evt.keyCode
				if ( charCode != 43 && charCode > 31 && ( charCode < 48 || charCode > 57 ) )
					evt.preventDefault()
				else return true
			} )
			textRef.current?.addEventListener( 'paste', ( evt ) => {
				evt.preventDefault()
				const el = evt.target as HTMLInputElement
				const contents = evt.clipboardData?.getData( 'text' )
				const phone = contents?.replace( / /g, '' )
				if ( phone ) {
					const newValue = phone.replace ( /(?!\+)\D/g, '' )
					el.value = newValue
				}
			} )
		}
	}, [] )

	const textRef = useRef<HTMLInputElement>( null )

	return (
		<div className="flex flex-col gap-2 relative">
			<label className="w-fit" htmlFor={name}>
				<span className="">{label}</span>
				{requiredIcon}
			</label>
			{fieldType === 'text' ? (
				<>
					{loading ? (
						<div className="h-8 p-2 w-full border dark:border-white/25 rounded-lg">
							<div className="h-full max-w-sm dark:bg-dark-secondary animate-pulse"></div>
						</div>
					) : (
						<input
							id={name}
							type={type}
							placeholder={placeholder}
							{...field}
							className={cn(
								'text-gray-800 dark:text-white p-2 border rounded-lg !bg-transparent ring-0 focus:ring-0 shadow-none focus:outline-none  transition-default',
								// field validation
								[
									'border-gray-800 dark:focus:border-white/50 dark:border-white/25',
									meta.touched &&
                    meta.error &&
                    'focus:border-red-500 border-red-500',
								]
							)}
							disabled={disabled}
							ref={textRef}
						/>
					)}
				</>
			) : fieldType === 'switch' ? (
				<>
					<Switch
						name={field.name}
						checked={field.value}
						onChange={() => {
							helpers.setValue( !field.value )
							helpers.setTouched( true )
						}}
						value={field.value}
						className={cn(
							'relative inline-flex h-6 w-11 items-center rounded-full border border-transparent transition-default dark:bg-dark dark:hover:border-white/25',
							['dark:bg-dark-secondary', field.value && 'dark:bg-orange']
						)}
						disabled={disabled}
					>
						<span className="sr-only">Enable notifications</span>
						<span
							className={cn(
								'inline-block h-4 w-4 transform rounded-full dark:bg-white transition',
								['translate-x-1', field.value && 'translate-x-6']
							)}
						/>
					</Switch>
				</>
			) : (
				''
			)}
			<p className="invisible">sdfsfss</p>
			<p
				className={cn(
					'absolute bottom-0 text-[0.7rem] text-red-500 transition-default delay-100',
					[
						'-translate-y-2 opacity-0',
						meta.error && meta.touched && 'translate-y-0 opacity-100',
					]
				)}
			>
				{meta.error}
			</p>
		</div>
	)
} )

export default FormikField
