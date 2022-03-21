class NumberUtil {

	static numberWithCommas(number) {
		return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
	}
}

export default NumberUtil
