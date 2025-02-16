import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Rate, Tag } from 'antd';
import {
  PhoneFilled,
  MailFilled,
  GithubFilled,
  ZhihuCircleFilled,
  CheckCircleFilled,
  ScheduleFilled,
  EnvironmentFilled,
  HeartFilled,
  CrownFilled,
} from '@ant-design/icons';
import cx from 'classnames';
import _, { size } from 'lodash-es';
import { FormattedMessage, useIntl } from 'react-intl';
import { getDefaultTitleNameMap } from '@/data/constant';
import { Avatar } from '../../Avatar';
import type { ResumeConfig, ThemeConfig } from '../../types';
import './index.less';

type Props = {
  value: ResumeConfig;
  theme: ThemeConfig;
};

const Wrapper = ({ className, title, color, children }) => {
  return (
    <div className={cx('section', className)}>
      <div className="section-title" style={{ color }}>
        <span className="title">{title}</span>
        <span className="title-addon" />
      </div>
      <div className="section-body">{children}</div>
    </div>
  );
};

/**
 * @description 简历内容区
 */
export const Template2: React.FC<Props> = props => {
  const intl = useIntl();
  const { value, theme } = props;

  /** 个人基础信息 */
  const profile = _.get(value, 'profile');

  const titleNameMap = _.get(
    value,
    'titleNameMap',
    getDefaultTitleNameMap({ intl })
  );

  /** 教育背景 */
  const educationList = _.get(value, 'educationList');

  /** 工作经历 */
  const workExpList = _.get(value, 'workExpList');

  /** 项目经验 */
  const projectList = _.get(value, 'projectList');

  /** 个人技能 */
  const skillList = _.get(value, 'skillList');

  /** 更多信息 */
  const awardList = _.get(value, 'awardList');

  /** 作品 */
  const workList = _.get(value, 'workList');

  /** 自我介绍 */
  const aboutme = _.split(_.get(value, ['aboutme', 'aboutme_desc']), '\n');

  return (
    <div className="template2-resume resume-content">
      <div className="basic-info main-info">
        <div className="profile">
          <div className="profile-info">
            {profile?.name && <div className="name">{profile.name}</div>}
            <div className="profile-list">
              {profile?.mobile && (
                <div className="mobile">
                  <PhoneFilled style={{ color: theme.color, opacity: 0.85 }} />
                  {profile.mobile}
                </div>
              )}
              {profile?.email && (
                <div className="email">
                  <MailFilled style={{ color: theme.color, opacity: 0.85 }} />
                  {profile.email}
                </div>
              )}
              {profile?.github && (
                <div className="github">
                  <GithubFilled style={{ color: theme.color, opacity: 0.85 }} />
                  <span
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      window.open(profile.github);
                    }}
                  >
                    {profile.github}
                  </span>
                </div>
              )}
              {profile?.zhihu && (
                <div className="github">
                  <ZhihuCircleFilled
                    style={{ color: theme.color, opacity: 0.85 }}
                  />
                  <span
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      window.open(profile.zhihu);
                    }}
                  >
                    {profile.zhihu}
                  </span>
                </div>
              )}
              {profile?.workExpYear && (
                <div className="work-exp-year">
                  <ScheduleFilled
                    style={{ color: theme.color, opacity: 0.85 }}
                  />
                  <span>
                    <FormattedMessage id="工作经验" />: {profile.workExpYear}
                  </span>
                </div>
              )}
              {profile?.workPlace && (
                <div className="work-place">
                  <EnvironmentFilled
                    style={{ color: theme.color, opacity: 0.85 }}
                  />
                  <span>
                    <FormattedMessage id="期望工作地" />: {profile.workPlace}
                  </span>
                </div>
              )}
              {profile?.positionTitle && (
                <div className="expect-job">
                  <HeartFilled style={{ color: theme.color, opacity: 0.85 }} />
                  <span>
                    <FormattedMessage id="职位" />: {profile.positionTitle}
                  </span>
                </div>
              )}
            </div>
          </div>
          {/* 头像 */}
          {!value?.avatar?.hidden && (
            <Avatar
              avatarSrc={value?.avatar?.src}
              className="avatar"
              shape={value?.avatar?.shape}
              size={value?.avatar?.size}
            />
          )}
        </div>
        {/* </Wrapper> */}
        {/* 教育经历 */}
        {educationList?.length ? (
          <Wrapper
            // title=<FormattedMessage id="教育背景" />
            title={titleNameMap.educationList}
            className="section section-education"
            color={theme.color}
          >
            {educationList.map((education, idx) => {
              const [start, end] = education.edu_time;
              return (
                <div key={idx.toString()} className="education-item">
                  <div>
                    <span>
                      <b>{education.school}</b>
                      <span style={{ marginLeft: '8px' }}>
                        {education.major && <span>{education.major}</span>}
                        {education.academic_degree && (
                          <span
                            className="sub-info"
                            style={{ marginLeft: '4px' }}
                          >
                            ({education.academic_degree})
                          </span>
                        )}
                      </span>
                    </span>
                    <span className="sub-info" style={{ float: 'right' }}>
                      {start}
                      {end ? ` - ${end}` : ' 至今'}
                    </span>
                    <div style={{ marginLeft: '0px', paddingLeft: '0px' }}>
                      <ul
                        className="md-ul"
                        style={{
                          marginTop: '5px',
                          padding: '0px',
                          paddingLeft: '14px',
                        }}
                      >
                        <li>
                          <strong>英语等级</strong>：<b>CET-6</b>
                        </li>
                        <li>本科生实验室大数据团队负责人</li>
                        <li>
                          <b>专业课程</b>： {education.major_lesson}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </Wrapper>
        ) : null}
        {workList?.length ? (
          <Wrapper
            // title=<FormattedMessage id="个人作品" />
            title={titleNameMap.workList}
            className="section section-work"
            color={theme.color}
          >
            {workList.map((work, idx) => {
              return (
                <div key={idx.toString()}>
                  <div>
                    <CrownFilled
                      style={{ color: '#ffc107', marginRight: '8px' }}
                    />
                    <b className="info-name">{work.work_name}</b>
                    <a className="sub-info" href={work.visit_link}>
                      <FormattedMessage id="访问链接" />
                    </a>
                  </div>
                  {work.work_desc && (
                    <div className="markdown-item">{work.work_desc}</div>
                  )}
                </div>
              );
            })}
          </Wrapper>
        ) : null}
        {/* 自我介绍 */}
        {/* <Wrapper
          title={<FormattedMessage id="自我介绍" />}
          className="section section-aboutme"
          color={theme.color}
        >
          {aboutme.map((d, idx) => (
            <div key={`${idx}`}>{d}</div>
          ))}
        </Wrapper> */}
        {workExpList?.length ? (
          <Wrapper
            className="experience"
            // title=<FormattedMessage id="工作经历" />
            title={titleNameMap.workExpList}
            color={theme.color}
          >
            <div className="section section-work-exp">
              {_.map(workExpList, (work, idx) => {
                const [start = null, end = null] =
                  typeof work.work_time === 'string'
                    ? `${work.work_time || ''}`.split(',')
                    : work.work_time;
                const workContentList = work
                  ? work.work_list.map((li, idx) => {
                      return (
                        <li key={idx} className="markdown-item">
                          <ReactMarkdown>{li}</ReactMarkdown>
                        </li>
                      );
                    })
                  : null;
                return work ? (
                  <div className="section-item" key={idx.toString()}>
                    <div className="section-info">
                      <b className="info-name">
                        {work.company_name}
                        <span className="sub-info">{work.department_name}</span>
                      </b>
                      <span className="info-time">
                        {start}
                        {end ? ` ~ ${end}` : <FormattedMessage id=" 至今" />}
                      </span>
                    </div>
                    <div className="work-description markdown-item">
                      <ReactMarkdown>{work.work_desc}</ReactMarkdown>
                    </div>
                    {/* 工作内容列表 */}
                    <div className="work-content-list">
                      <ul
                        className="md-ul"
                        style={{
                          marginTop: '5px',
                          padding: '0px',
                          paddingLeft: '14px',
                        }}
                      >
                        {workContentList}
                      </ul>
                    </div>
                  </div>
                ) : null;
              })}
            </div>
          </Wrapper>
        ) : null}

        {projectList?.length ? (
          <Wrapper
            className="skill"
            // title=<FormattedMessage id="项目经历" />
            title={titleNameMap.projectList}
            color={theme.color}
          >
            <div className="section section-project">
              {_.map(projectList, (project, idx) => {
                const project_contents = project
                  ? project.project_content_list.map((item, idx) => {
                      return (
                        <li key={idx} className="markdown-item">
                          <ReactMarkdown>{item}</ReactMarkdown>
                        </li>
                      );
                    })
                  : null;
                return project ? (
                  <div className="section-item" key={idx.toString()}>
                    <div className="section-info">
                      <b className="info-name">
                        {project.project_name}
                        <span className="info-time">
                          {project.project_time}
                        </span>
                      </b>
                      {project.project_role && (
                        <div style={{ color: 'black', fontSize: '12px' }}>
                          {/* <Tag color={theme.tagColor}>{project.project_role}</Tag> */}
                          <strong>{project.project_role}</strong>
                        </div>
                      )}
                    </div>
                    <div className="section-detail">
                      <span>
                        <b>项目描述：</b>
                      </span>
                      <span className="markdown-item">
                        <ReactMarkdown>{project.project_desc}</ReactMarkdown>
                      </span>
                      <span style={{ display: 'block' }}>
                        项目技术栈:{' '}
                        <strong>{project.project_technology_stack}</strong>
                      </span>
                    </div>

                    <div className="section-detail">
                      <span>
                        <b>核心功能：</b>
                      </span>
                      <ul
                        className="md-ul"
                        style={{
                          marginTop: '5px',
                          padding: '0px',
                          paddingLeft: '14px',
                        }}
                      >
                        {project_contents}
                      </ul>
                      {/* </div> */}
                    </div>
                  </div>
                ) : null;
              })}
            </div>
          </Wrapper>
        ) : null}
        {/* 个人优势等 */}
        {awardList?.length ? (
          <Wrapper
            // title="更多信息"
            title={titleNameMap.awardList}
            className="section section-award"
            color={theme.color}
          >
            {awardList.map((award, idx) => {
              return (
                <div key={idx.toString()}>
                  <span className="info-name">{award.award_info}</span>
                  {award.award_time && (
                    <span className="sub-info award-time">
                      ({award.award_time})
                    </span>
                  )}
                </div>
              );
            })}
          </Wrapper>
        ) : null}
        {skillList?.length ? (
          <Wrapper
            // title=<FormattedMessage id="专业技能" />
            title={titleNameMap.skillList}
            className="section section-skill"
            color={theme.color}
          >
            <ul
              className="md-ul"
              style={{ marginTop: '5px', padding: '0px', paddingLeft: '14px' }}
            >
              {skillList.map((skill, idx) => {
                const skills = _.split(skill.skill_desc, '\n').join('；');
                return skills ? (
                  <li>
                    <div className="skill-item" key={idx.toString()}>
                      <span className="markdown-item">
                        <ReactMarkdown>{skills}</ReactMarkdown>
                      </span>
                    </div>
                  </li>
                ) : null;
              })}
            </ul>
          </Wrapper>
        ) : null}
      </div>
      <div className="main-info"></div>
    </div>
  );
};
