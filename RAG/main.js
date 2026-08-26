import { PDFParse } from 'pdf-parse'
import { RecursiveCharacterTextSplitter } from '@langchain/textsplitters'
import fs from 'fs'

let dataBuffer = fs.readFileSync('./sample.pdf')

const parser = new PDFParse({
    data: dataBuffer
})

const data = await parser.getText()
console.log(data)
const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 200,
    chunkOverlap:0
})

const chunks = await splitter.splitText(data.text)

console.log(chunks)