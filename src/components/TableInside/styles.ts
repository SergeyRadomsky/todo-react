import styled from 'styled-components';

export const StyledTableInside = styled.div`

	.ant-table-thead {
		background-color: red;
		font-size: 9px;
	}

	.ant-table-wrapper .ant-table-container table>thead>tr:first-child >*:last-child {
		border-start-end-radius: 0px;
	}
	.ant-table-container table>thead>tr:first-child >*:first-child {
		border-start-start-radius: 0px;
	}
	.ant-table-thead > tr > th {
		background-color: #D7E8F1;
		border-bottom: 0;
	}

	.ant-table-wrapper .ant-table-tbody >tr >td {
		border-bottom: 2px solid #E5E5E5;
	}

	.ant-table-row:nth-child(2n + 1) {
		background-color: #F5F5F5;
	}

	//каждая ячейка в столбце движения
	.ant-table-row {
		border-bottom: 3px solid rgb(171 171 171);
		&:hover {
			width: 600px;
		}
		.ant-table-cell:nth-child(2) {
			padding: 0;

			text-align: start;
		}
	}
	
	.move-word {
		display: flex;
		flex-direction: column;
		justify-content: center;
		/* align-items: center; */
		span {
			/* border-top: 1px solid  #E5E5E5; */
			border-bottom: 1px solid  #E5E5E5;
			padding: 3px 30px 3px 5px;
		}
		span:last-child {
			border-bottom: 0;
			/* padding: 0; */
		}
	}
	

	.ant-table-row > .ant-table-cell {
		border-right: 1px solid rgb(171 171 171);
	}

	.ant-table-row > .ant-table-cell:last-child {
		border-right: 0;
	}

	.ant-pagination {
		display: none;
	}	
`;