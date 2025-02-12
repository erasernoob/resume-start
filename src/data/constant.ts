import type { ResumeConfig } from '@/components/types';

export function getDefaultTitleNameMap({ intl }): ResumeConfig['titleNameMap'] {
  return {
    /** 默认: 教育背景 */
    educationList: intl.formatMessage({ id: '教育经历' }),
    /** 默认: 工作经历 */
    workExpList: intl.formatMessage({ id: '实习经历' }),
    /** 默认: 项目经历 */
    projectList: intl.formatMessage({ id: '项目经历' }),
    /** 默认: 个人技能 */
    skillList: intl.formatMessage({ id: '专业技能' }),
    /** 默认: 更多信息 */
    awardList: intl.formatMessage({ id: '个人优势' }),
    /** 默认: 作品 */
    workList: intl.formatMessage({ id: '个人作品' }),
    /** 默认: 自我介绍 */
    aboutme: intl.formatMessage({ id: '自我介绍' }),
  };
}
