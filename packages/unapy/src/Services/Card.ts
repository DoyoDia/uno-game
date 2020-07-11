import { CardData, CardTypes, CardColors } from "@unapy/Protocols/Card"
import uuid from "uuid"

import staticFilesConfig from "@unapy/Config/static-files"

class CardService {
	private readonly cardTypes: CardTypes[] = [
		"0",
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"block",
		"buy-2",
		"buy-4",
		"change-color",
		"reverse"
	]

	private readonly cardColors: CardColors[] = [
		"blue",
		"green",
		"red",
		"yellow"
	]

	setupInitialCards () {
		const initialCards: CardData[] = []

		this.cardTypes.map(cardType => {
			this.cardColors.map(cardColor => {
				const cardPictureSrc = this.buildCardPictureSrc(cardType, cardColor)
				const cardId = uuid.v4()

				initialCards.push({
					id: cardId,
					src: cardPictureSrc,
					name: `${cardType}-${cardColor}`,
					color: cardColor,
					type: cardType
				})
			})
		})

		return initialCards
	}

	private buildCardPictureSrc (cardType: CardTypes, cardColor: CardColors) {
		const baseUrl = staticFilesConfig.staticFilesBaseUrl

		const picturePath = `${cardType}/${cardColor}.png`

		return `${baseUrl}/${picturePath}`
	}
}

export default new CardService()