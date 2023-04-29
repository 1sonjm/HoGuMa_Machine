import { SimpleGrid } from '@mantine/core'
import { useState } from 'react'

import HistoryCard, { History } from './HistoryCard'


export default function HistoryList({ column=4 }: {
  column?: number
}) {
	const [hisotryList, setHisotryList] = useState<Array<History>>([{words: '호구마', memberCount: 2, startNumber: 1}])

	return (
		<>
			<SimpleGrid cols={column}>
				<HistoryCard />
				{hisotryList.map((value, index)=>(
					<HistoryCard
						key={index}
						hisotry={value}
					/>
				))}
			</SimpleGrid>
		</>
	)
}
