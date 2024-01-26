import React from 'react'
import { toast } from 'react-toastify'
import { AxiosResponse } from 'axios'

type Props = {
    requestFunction: () => Promise<AxiosResponse>
    filePrefix: string
}

export const ExportSpreadSheetButton: React.FC<Props> = ({
    requestFunction,
    filePrefix
}) => {
    const downloadSpreadSheet = async () => {
        await toast.promise(async () => {
            const res = await requestFunction()
            const blobUrl = window.URL.createObjectURL(new Blob([res.data]))

            const today = (new Date()).toLocaleDateString().replaceAll('/', '-')
            const a = document.createElement('a')
            a.href = blobUrl
            a.download = `Lowry-${filePrefix}-${today}.csv`
            document.body.appendChild(a)

            a.click()

            document.body.removeChild(a)

            window.URL.revokeObjectURL(blobUrl)
        }, {
            pending: 'Preparing your spreadsheet for download...',
            error: 'Something went wrong exporting this spreadsheet. Please try again later.',
            success: 'Spreadsheet ready for download.'
        })
    }

    return (
        <button className="secondary" onClick={downloadSpreadSheet}>
            Export Spreadsheet
        </button>
    )
}

