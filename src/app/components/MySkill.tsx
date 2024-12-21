import React from 'react'
import FadeInY from './motion/FadeInY'
import MaxWidthWrapper from './MaxWidthWrapper'
import MySkillItem from './MySkillItem'
import { CsharpOriginal, NodejsPlainWordmark, CplusplusOriginal, ReactOriginal, JavascriptOriginal, TypescriptOriginal, PythonOriginal, PhpOriginal, UnityPlain, NextjsPlain, JavaOriginal, COriginal } from 'devicons-react'

function MySkill() {
    return (
        <FadeInY startInView={-50} className='w-full my-20'>
            <MaxWidthWrapper className='flex flex-col items-center justify-center gap-8'>
                <h1 className="text-[#00FF80] font-semibold text-3xl md:text-5xl text-center"> My Skill </h1>
                <div className='w-full flex flex-wrap items-center justify-center gap-x-4 gap-y-4'>
                    <MySkillItem Icon={<CsharpOriginal size={100} />} title='C#' desc='My main language is C#, For backend game development' />
                    <MySkillItem Icon={<NodejsPlainWordmark size={100} color='white' />} title='Node JS' desc='For backend web development' />
                    <MySkillItem Icon={<CplusplusOriginal size={100} />} title='C++' desc='For backend game development' />
                    <MySkillItem Icon={<ReactOriginal size={100} />} title='React' desc='For frontend web development' />
                    <MySkillItem Icon={<JavascriptOriginal size={100} />} title='Javascript' desc='For fullstack web development' />
                    <MySkillItem Icon={<TypescriptOriginal size={100} />} title='Typescript' desc='For fullstack web development' />
                    <MySkillItem Icon={<PythonOriginal size={100} />} title='Python' desc='For data analysis' />
                    <MySkillItem Icon={<PhpOriginal size={100} />} title='PHP' desc='For backend web development' />
                    <MySkillItem Icon={<UnityPlain size={100} color='white' />} title='Unity Engine' desc='Game engine for game development' />
                    <MySkillItem Icon={<NextjsPlain size={100} color='white' />} title='Next JS' desc='For fullstack web development' />
                    <MySkillItem Icon={<JavaOriginal size={100} />} title='Java' desc='For application development' />
                    <MySkillItem Icon={<COriginal size={100} />} title='C' desc='For simple project' />

                </div>
            </MaxWidthWrapper>
        </FadeInY>
    )
}

export default MySkill
