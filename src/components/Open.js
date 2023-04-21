import React, { useState } from 'react'
import { Configuration, OpenAIApi } from 'openai'

const Open = () => {
    const configuration = new Configuration({
        apiKey:"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",
    })
    const openai = new OpenAIApi(configuration)

    const [prompt, setPrompt] = useState("")
    const [result, setResult] = useState("")
    const [loading, setLoading] = useState(false)

    const handleClick = async () => {
        setLoading(true)
        try {
            const response = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: 'try anything from here',
                temperature: 0.5,
                max_tokens: 100,
            })
            setResult(response.data.choices[0].text)
        }
        catch (error) {
            console.log(error)
        }
        setLoading(false)
    }
    return (
        <div className='container'>
            <div className='d-flex justify-content-center'>
                <div className='col-md-8'>
                    <textarea
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        className='form-control'
                    ></textarea>
                    <button
                    onClick={handleClick}
                    className='btn btn-primary'
                    disabled={loading || prompt.length===0}
                    >{loading?'Generating...':'Generate'}</button>
                    <pre>{result}</pre>
                </div>
            </div>
        </div>
    )
}

export default Open