---
title: "Ship with the customer in mind"
description: "What working beside our customers taught me about customer success, engineering, and deciding what to ship."
publishDate: 2026-10-13
footer: "No LLMs were harmed in the making of this post. One was mildly inconvenienced during proofreading."
tags:
  - Customer success
  - Engineering
  - Product
---

My co-founder used to tell me, “Ship with the customer in mind.”


I thought I knew what she meant.


I cared about building things properly. I wanted implementations that scaled, followed good engineering principles, and would hold up as the product grew. I could get so engrossed in doing that well that I shipped things the user did not actually want.


That became harder to ignore when we started working much more closely with our customers. By closely, I mean literally moving into their offices and shipping alongside them.


Watching someone work gives you a different understanding of their problem from discussing a feature on a call. You see the process your product needs to fit into, the information they have to gather before using it, and the work they still have to do afterward. You also see the places where your technically sound implementation makes their day harder.


I began to understand what my co-founder had been asking of me. I needed to understand the customer’s problem well enough to explain why our implementation belonged in their workflow.


The faster we can ship, the more that judgment matters. Speed lets us act on a decision sooner. We still have to make a good decision.


## What is customer success?


Customer success means helping customers get the value they came to your product for.


There is some history behind that idea. Research places customer success management within an evolution of customer relationship management, customer experience, and customer engagement. A 2020 paper describes its focus on proactively helping customers realize value from what they use.<sup>[1](#source-1)</sup>


Support is an important part of this. It usually begins with a question or a problem that needs resolving. Customer success also asks whether the customer is making progress before they have a reason to contact us.


The distinction is useful, but it is not an absolute boundary. Support can be proactive too. Support is one pillar of the broader responsibility to help customers succeed, regardless of how a company organizes its teams.


Engineering makes that responsibility concrete through ordinary product decisions: what we instrument, how onboarding works, how someone reaches us, and what evidence earns a place on the roadmap.


I dislike advice that stops at “have more customer empathy.” These are the practices that make that idea actionable.


## Make it easy for customers to reach you


When we were building Iris, we understood that we needed a direct line to our users. We did not yet understand the best way to create one.


So we put my co-founder’s phone number in the app.


I would not choose that as the default support channel for a free consumer app again.


The intention was to make us accessible. But a public phone number does not carry the context of what someone was doing, which account they were using, or where something went wrong. It leaves the customer to decide how to start the conversation and explain everything from scratch.


It also makes one person the entry point for everything. Product issues, account questions, job enquiries, and unrelated messages can all arrive through the same channel. Helping someone then depends on manually identifying the request, gathering context, and getting it to the right person.


The willingness to answer was there. The design of the channel still added friction.


Email fit Iris better because users could already ask our in-app agent to send emails. Reporting a bug or sending us feedback could happen through a capability they were already using.


YC also pushed us to take more user calls. We used PostHog to understand which features people had tried, then chose users whose experiences could help us answer specific questions.


The channel should fit the product and its users. If your gaming community already spends time in Discord, a server might be useful. But requiring everyone to join that server just to get help creates another step, especially for someone who has barely started using your product.


Keep an easy route from the product itself, then use the contact channels people have provided and agreed to hear from us through. As conversations spread across channels, someone still needs to own each issue and preserve its history. Aggregating the messages can help; ownership and follow-through are what make it useful.


## Use analytics to notice the people who never write in


One reason I connect engineering so closely with customer success is that we already have ways to detect some bad experiences.


An error tracker might show a failed request. A funnel might show people abandoning a step. Product analytics might show someone repeatedly trying a feature without completing the action it exists to help them perform. PostHog’s funnel tools, for example, let you inspect the people who completed or dropped out of a step and investigate further.<sup>[2](#source-2)</sup>


Those signals give us a reason to look more closely. They do not tell us the whole story.


Suppose someone starts an export, encounters an error, and never completes it. That is a better starting point for outreach than a generic “How are you finding the app?”


We can acknowledge the failure, explain what we know, and help them finish the task. We should still check that they are affected and that another message would be useful.


Reporting a problem should not be the only way a customer can get help, particularly when we already have evidence that something went wrong.


The messages that do arrive also need interpretation. A billing issue gives someone an immediate reason to contact us. A detailed feature request could come from a person who already gets considerable value, or from someone still trying to obtain the value they paid for.


Both conversations matter. Neither tells us, by itself, how the rest of the customer base is doing.


We need to hear from people who use the product deeply, people who get stuck, and people who quietly stop. Analytics helps us find them. Conversations help us understand what happened.


## Build support around a path to resolution


In conversations with customer success and support leaders, I have heard very different views on AI.


Some teams use it to resolve straightforward requests immediately and send the harder cases to a human. Others distrust it enough that they would rather make a customer wait hours for a person than risk an unhelpful automated response.


I understand the concern. The outcome matters more than which kind of agent produces the answer.


A custom support workflow, including one built quickly with AI, can be a reasonable choice if it is **implemented well**.


That means the system must recognize its limits, escalate when necessary, preserve the customer’s context, and make it clear what happens next. If the AI keeps responding while a request that needs a human sits unattended, fast replies can coexist with very slow resolution.


That workflow needs:

- **A useful acknowledgment.** Confirm that the request has been received and explain the next step. A generic receipt is not a solution.
- **A realistic time for the next update.** “We’ll update you by tomorrow at 3 p.m. Pacific” gives the customer something concrete. Promise an update if you cannot yet promise a resolution.
- **A handoff that retains context.** A person taking over should have the conversation and relevant diagnostic information.
- **A way to continue asynchronously.** The customer should be able to leave and respond later without starting over.

The right timing depends on the product, the issue, and the channel. A critical failure needs different treatment from a routine question. An interface that looks like live chat should make it clear if help will actually arrive hours later.


If the user leaves, notify them through an appropriate channel when there is a useful update. Do not expect them to return at precisely the moment your team becomes available.


A short first message is not a reason to assume automated support cannot work.


There are several possible reasons for a short first message. The customer may not know which details matter. They may be in a hurry. They may also have learned from previous experiences that a long explanation gets them nowhere.


I have been that customer. Sometimes the first message is a way of finding out whether anyone is listening.


A good response can build enough trust to get the details needed to help. Where the product already has relevant information, we should avoid making the customer reconstruct it. Where information is genuinely missing, we should ask a specific question.


## Use CSAT as one signal


A support leader once challenged me on how useful CSAT, or customer satisfaction score, really is.


The problem is asking CSAT to represent more than it can.


CSAT usually captures a reported reaction to a particular experience. It reflects the people who answer the survey, whose experiences may differ from those who do not. Qualtrics discusses this response bias and the limited detail a single rating can capture; IBM also notes that CSAT does not provide a complete picture of a customer’s ongoing relationship with the company.<sup>[3](#source-3), [4](#source-4)</sup>


Put that rating beside evidence of resolution: whether the issue was resolved, how long that took, whether the customer had to repeat themselves or reopen it, and whether they could subsequently complete the task.


A friendly answer can earn a positive reaction. We still need to know whether it helped.


## Be honest about activation, and take onboarding seriously


At Minro, we help companies improve customer success through our product and by working directly with their teams. Retention is central to that work: are their users getting enough value from our clients’ products to keep coming back?


That makes the definition of activation important.


It is tempting to choose a milestone that makes the numbers look healthy. An account was created. A screen was opened. Onboarding was completed.


Those can be useful steps to measure. Whether one deserves to mean “activated” depends on what the customer has actually achieved by that point.


For an email product, connecting an account might only be preparation. Completing the first useful email workflow could be closer to value. For another product, the meaningful milestone will be different.


A stricter definition is useful when it better represents value. Making the bar arbitrarily higher does not make the metric more honest.


We need to explain why the milestone matters and investigate whether people who reach it tend to continue getting value. A lower number can be useful if it reveals the part of the experience we need to improve.


Onboarding is part of that experience. It sets expectations, introduces the product, and helps someone reach the first useful result.


Measure completion, where people leave, how long steps take, and whether they reach that result afterward. Funnels can identify where to investigate, including the users who dropped out.<sup>[2](#source-2)</sup> A long time on a screen might indicate confusion, but it could also be expected work. The number should lead to a question.


Treat onboarding as part of delivering the product’s value from the beginning.


## Separate early value from ongoing retention


One dashboard can give the team a shared view, but it needs clear definitions and maintenance as the product changes.


Keep two questions visible:

1. Are new customers reaching value?
2. Are established customers continuing to receive it?

For a weekly subscription, the first seven days may be especially worth examining alongside the first renewal. Later usage and renewals answer a different question: whether the product has become useful enough to keep.


A first-week activation funnel, a daily retention curve, and a subscription renewal rate measure different things. Put them together where useful, with labels that make those differences explicit.


For each measure, write down who is included, what action counts, when the clock starts, and which time window applies. Analytics tools require these decisions: PostHog retention, for example, distinguishes a starting event from a returning event and offers different rules for when a return counts.<sup>[5](#source-5)</sup>


Someone returning on Day 7 is not the same measure as someone returning at any point from Day 7 onward. Those definitions should stay consistent when comparing results.<sup>[6](#source-6)</sup>


The age of the group matters too. A customer who signed up yesterday has not had an opportunity to reach Day 7. Incomplete observation windows need to remain distinguishable from completed ones; Amplitude explicitly marks incomplete retention data for this reason.<sup>[6](#source-6)</sup>


This becomes particularly important when evaluating product changes.


Suppose an onboarding bug affects people who sign up on Monday, and we fix it on Tuesday. The Monday customers still had that experience. The deployment does not erase it.


Record which customers were exposed, keep that group identifiable, and follow their later outcomes. Then compare relevant groups at the same age, accounting for other differences where possible.


If Monday’s group has weaker Day 7 retention, that is a reason to investigate. It does not prove the bug caused the difference.


The same discipline applies to a billing incident or a feature release. Record what happened, when it happened, and who encountered it. Follow those customers through the measures that matter instead of only looking at the graph on release day.


When a definition changes, record that too. Otherwise an apparent improvement may come from changing who gets counted.


## Turn customer evidence into shipping decisions


There is a familiar argument that customers cannot tell you what to build. The “faster horse” example usually appears somewhere in that conversation.


The useful question is what the request tells us about the customer’s problem.


If someone asks for a faster horse, speed is one hypothesis about their problem. The next step is to understand the journey: where they are going, what makes it difficult, and what a better result would change for them.


The same applies to a feature request. The request is evidence worth taking seriously. Understanding the process behind it is what gives us room to find a useful solution.


For example, suppose a customer asks for another dashboard. Before building it, look at the decision they are trying to make. They might need a new view. They might need one reliable number, a timely alert, or an existing report delivered into the workflow they already use.


That is the kind of understanding I started developing by working beside customers.


Each proposed change should answer five questions:

1. **What is the customer trying to accomplish?** Describe the task and the process around it.
2. **What is preventing it?** Bring an observed workflow, a conversation, or product evidence.
3. **Who is affected, and how much does it matter?** Distinguish a minor inconvenience from something that prevents the customer getting value.
4. **What is the smallest useful change?** It might be a fix, better onboarding, a configuration change, or a new feature.
5. **How will we know it helped?** Choose evidence of a better customer outcome before we ship.

Then we can weigh those answers against effort, risk, and the other problems competing for our attention.


If you’re dealing with the same questions at your company, I’d love to compare notes. How do you decide which customer problems make it onto your roadmap?


## Sources

1. <span id="source-1"></span>Hilton, B., Hajihashemi, B., Henderson, C. M., and Palmatier, R. W. (2020). [Customer Success Management: The next evolution in customer management practice?](https://doi.org/10.1016/j.indmarman.2020.08.001), _Industrial Marketing Management_, 90, 360–369. [Open-access full text](https://europepmc.org/articles/PMC7439993).
2. <span id="source-2"></span>PostHog, [Funnels](https://posthog.com/docs/product-analytics/funnels).
3. <span id="source-3"></span>Qualtrics, [What is CSAT and how do you measure it?](https://www.qualtrics.com/articles/customer-experience/what-is-csat/).
4. <span id="source-4"></span>IBM, [What is CSAT?](https://www.ibm.com/think/topics/csat-customer-satisfaction-score).
5. <span id="source-5"></span>PostHog, [Retention](https://posthog.com/docs/product-analytics/retention).
6. <span id="source-6"></span>Amplitude, [Interpret your retention analysis](https://amplitude.com/docs/analytics/charts/retention-analysis/retention-analysis-interpret).
