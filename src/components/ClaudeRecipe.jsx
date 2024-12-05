import ReactMarkdown from 'react-markdown'


function ClaudeRecipe(props) {

    return (
        <section className='suggested-recipe-container'>
            <h2>Chef Claude Recommends:</h2>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
}

export default ClaudeRecipe