export const Goals = () => {
    const goals = {
        5: `I want to dive into a dynamic, fast-paced environment. I like the idea of taking on new challenges each day and knowing we can rely on our strong team to get through it. My previous career taught me that stagnancy scares me while a little chaos energizes me, so I want to lean into that to learn and grow as much as I can.`,
        10: `I hope to work toward full-stack. I like seeing the full process connect from backend to frontend and the combination of the creativity of front-end combined with the deep work of back-end.`,
        30: `Under construction! I'm excited to dive into learning right now and stay open to where that takes me. I hope I can take what I've eventually learnt throughout my career in my failures and successes and pass that knowledge on to future students.`,
    }

    return <div id='goals'>
        <h5 className='display-4 text-center'>Goals</h5>
        <p className='text-center text-muted'>5 year / 10 year / 30 year</p>
        <div className='container w-50'>
            <div className='row mb-3'>
                <h5 className='display-6 text-end col col-sm-2 m-0'>5</h5>
                <p className='col d-flex align-items-center m-0'>{goals[5]}</p>
            </div>
            <div className='row mb-3'>
                <h5 className='display-6 text-end col col-sm-2 m-0'>10</h5>
                <p className='col d-flex align-items-center m-0'>{goals[10]}</p>
            </div>
            <div className='row mb-3'>
                <h5 className='display-6 text-end col col-sm-2 m-0'>30</h5>
                <p className='col d-flex align-items-center m-0'>{goals[30]}</p>
            </div>
        </div>
    </div>
}