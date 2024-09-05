export const Order = () => {
	return (
		<section className='order'>
			<div className='container'>
				<h2 className='order__title'>Доставка</h2>

				<form className='order__form'>
					<input type='text' className='order__input' name='name' placeholder='Имя' />
					<input type='text' className='order__input' name='phone' placeholder='Телефон' />
					<input type='text' className='order__input order__input_address' name='address' placeholder='Адрес' />

					<fieldset className='order__mayment'>
						<h3 className='order__payment__title'>Оплата:</h3>

						<label className='order__payment-label'>
							<input type='radio' name='payment' value='card' className='order__radio' defaultChecked />
							Картой
						</label>

						<label className='order__payment-label'>
							<input type='radio' name='payment' value='cash' className='order__radio' />
							Наличные
						</label>
					</fieldset>
				</form>
			</div>
		</section>
	);
};
